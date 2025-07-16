"use client";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../AuthContext";
import { useRouter } from "next/navigation";

interface Address {
  id: string;
  address: string;
  is_default: boolean;
}

export default function UserProfile() {
  const [profile, setProfile] = useState<any>(null);
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [loading, setLoading] = useState(true);
  const [editProfile, setEditProfile] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [phone, setPhone] = useState("");
  const [addressInput, setAddressInput] = useState("");
  const [editingAddressId, setEditingAddressId] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [addressLoading, setAddressLoading] = useState(false);

  const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5000";
  const { user, token, auth } = useAuth();
  const router = useRouter();

  // Fetch profile and addresses
  useEffect(() => {
    if (!auth || !token) {
      router.replace('/login');
      return;
    }
    const fetchProfile = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE}/api/users/profile`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        const data = await res.json();
        if (res.ok) {
          setProfile(data.user);
          setFirstName(data.user.first_name);
          setLastName(data.user.last_name);
          setEmail(data.user.email || "");
          setPhone(data.user.phone || "");
          setPinCode(data.user.pin_code || "");
          setAddresses(data.addresses || []);
        } else {
          setError(data.message || "Failed to load profile");
        }
      } catch {
        setError("Network error. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [auth, token, router]);

  // Update profile
  const handleProfileSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); setSuccess("");
    try {
      const res = await fetch(`${API_BASE}/api/users/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email,
          password: password || undefined,
          phone,
          pin_code: pinCode
        })
      });
      if (res.ok) {
        setSuccess("Profile updated!");
        setEditProfile(false);
        setPassword(""); // Clear password field after update
      } else {
        const data = await res.json();
        setError(data.message || "Failed to update profile");
      }
    } catch {
      setError("Network error. Please try again.");
    }
  };

  // Add or edit address
  const handleAddressSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); setSuccess(""); setAddressLoading(true);
    try {
      if (editingAddressId) {
        // Edit
        const res = await fetch(`${API_BASE}/api/users/addresses/${editingAddressId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({ address: addressInput, is_default: false })
        });
        if (res.ok) {
          setSuccess("Address updated!");
          setEditingAddressId(null);
          setAddressInput("");
        } else {
          const data = await res.json();
          setError(data.message || "Failed to update address");
        }
      } else {
        // Add
        const res = await fetch(`${API_BASE}/api/users/addresses`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({ address: addressInput, is_default: addresses.length === 0 })
        });
        if (res.ok) {
          setSuccess("Address added!");
          setAddressInput("");
        } else {
          const data = await res.json();
          setError(data.message || "Failed to add address");
        }
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setAddressLoading(false);
      // Refresh addresses
      const res = await fetch(`${API_BASE}/api/users/addresses`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      if (res.ok) setAddresses(data.addresses || []);
    }
  };

  // Delete address
  const handleDeleteAddress = async (id: string) => {
    setError(""); setSuccess("");
    try {
      const res = await fetch(`${API_BASE}/api/users/addresses/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        setSuccess("Address deleted!");
      } else {
        const data = await res.json();
        setError(data.message || "Failed to delete address");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      // Refresh addresses
      const res = await fetch(`${API_BASE}/api/users/addresses`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      if (res.ok) setAddresses(data.addresses || []);
    }
  };

  // Set default address
  const handleSetDefault = async (id: string) => {
    setError(""); setSuccess("");
    try {
      const addr = addresses.find(a => a.id === id);
      if (!addr) return;
      const res = await fetch(`${API_BASE}/api/users/addresses/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ address: addr.address, is_default: true })
      });
      if (res.ok) {
        setSuccess("Default address set!");
      } else {
        const data = await res.json();
        setError(data.message || "Failed to set default");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      // Refresh addresses
      const res = await fetch(`${API_BASE}/api/users/addresses`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      if (res.ok) setAddresses(data.addresses || []);
    }
  };

  // Use current location (geolocation API)
  const handleUseCurrentLocation = () => {
    setError(""); setSuccess("");
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      // Use a geocoding API to get address from lat/lng (stub: just show coords)
      setAddressInput(`Lat: ${latitude}, Lng: ${longitude}`);
      setSuccess("Location autofilled. Please edit as needed.");
    }, () => {
      setError("Unable to retrieve your location.");
    });
  };

  if (loading) return <div style={{ padding: 40, textAlign: 'center' }}>Loading...</div>;

  return (
    <div style={{ maxWidth: 500, margin: '40px auto', background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px 0 rgba(25, 118, 210, 0.10)', padding: 32 }}>
      <h2 style={{ fontSize: 28, fontWeight: 800, color: '#1976d2', marginBottom: 8 }}>{firstName || lastName ? `${firstName} ${lastName}`.trim() : email}</h2>
      <h3 style={{ fontSize: 18, fontWeight: 500, color: '#888', marginBottom: 24 }}>User Profile</h3>
      {error && <div style={{ color: '#f44336', fontWeight: 600, marginBottom: 12 }}>{error}</div>}
      {success && <div style={{ color: '#43cea2', fontWeight: 600, marginBottom: 12 }}>{success}</div>}
      <form onSubmit={handleProfileSave} style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
        <div style={{ display: 'flex', gap: 12 }}>
          <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First Name" required style={inputStyle} disabled={!editProfile} />
          <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last Name" required style={inputStyle} disabled={!editProfile} />
        </div>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required style={inputStyle} disabled={!editProfile} />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="New Password (leave blank to keep current)" style={inputStyle} disabled={!editProfile} />
        <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Phone" required style={inputStyle} disabled={!editProfile} />
        <input type="text" value={pinCode} onChange={e => setPinCode(e.target.value)} placeholder="Pin Code" required style={inputStyle} disabled={!editProfile} />
        <div style={{ display: 'flex', gap: 12 }}>
          <button type="button" onClick={() => setEditProfile(!editProfile)} style={{ ...buttonStyle, background: editProfile ? '#e3f0ff' : '#1976d2', color: editProfile ? '#1976d2' : '#fff' }}>{editProfile ? 'Cancel' : 'Edit Profile'}</button>
          {editProfile && <button type="submit" style={buttonStyle}>Save</button>}
        </div>
      </form>
      <h3 style={{ fontSize: 22, fontWeight: 700, color: '#1976d2', marginBottom: 12 }}>Addresses</h3>
      <ul style={{ listStyle: 'none', padding: 0, marginBottom: 18 }}>
        {addresses.map(addr => (
          <li key={addr.id} style={{ background: addr.is_default ? '#e3f0ff' : '#f8fafd', borderRadius: 8, padding: 14, marginBottom: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
            <span style={{ flex: 1 }}>{addr.address}</span>
            {addr.is_default && <span style={{ color: '#43cea2', fontWeight: 700, fontSize: 13, marginRight: 8 }}>(Default)</span>}
            <button onClick={() => { setEditingAddressId(addr.id); setAddressInput(addr.address); }} style={{ ...buttonStyle, background: '#fff', color: '#1976d2', border: '1.5px solid #1976d2' }}>Edit</button>
            <button onClick={() => handleDeleteAddress(addr.id)} style={{ ...buttonStyle, background: '#fff', color: '#f44336', border: '1.5px solid #f44336' }}>Delete</button>
            {!addr.is_default && <button onClick={() => handleSetDefault(addr.id)} style={{ ...buttonStyle, background: '#43cea2', color: '#fff' }}>Set Default</button>}
          </li>
        ))}
      </ul>
      {addresses.length < 3 && (
        <form onSubmit={handleAddressSave} style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 18 }}>
          <textarea value={addressInput} onChange={e => setAddressInput(e.target.value)} placeholder="Add new address" required style={{ ...inputStyle, minHeight: 50 }} />
          <div style={{ display: 'flex', gap: 10 }}>
            <button type="button" onClick={handleUseCurrentLocation} style={{ ...buttonStyle, background: '#e3f0ff', color: '#1976d2' }}>Use Current Location</button>
            <button type="submit" disabled={addressLoading} style={buttonStyle}>{editingAddressId ? 'Save Address' : 'Add Address'}</button>
          </div>
        </form>
      )}
    </div>
  );
}

const inputStyle = {
  padding: '12px 16px',
  borderRadius: 8,
  border: '1.5px solid #e3f0ff',
  fontSize: 16,
  outline: 'none',
  width: '100%',
} as React.CSSProperties;

const buttonStyle = {
  padding: '10px 18px',
  borderRadius: 8,
  border: 'none',
  fontWeight: 700,
  fontSize: 15,
  cursor: 'pointer',
  background: 'linear-gradient(90deg, #1976d2 0%, #43cea2 100%)',
  color: '#fff',
  boxShadow: '0 2px 8px #1976d244',
  letterSpacing: 1,
} as React.CSSProperties; 