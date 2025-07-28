'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import user from '../../Asstes/images/icons8-test-account-48.png'
import { useRouter } from 'next/navigation';

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [loading, setLoading] = useState(false); // Loading state for form submission
    const router = useRouter();
    const handleLogout = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent default form submission
        setLoading(true); // Show loading state

        try {
            sessionStorage.removeItem('authToken');
            router.push('/login');
        } catch (error) {
            alert('Logout failed. Please try again.')
        }

    }

    return (
        <div className="navbar">
            <Link href="#">🏠 Home</Link>
            <Link href="#footer">📞 Contacts</Link>
            <Link href="#card">💼 Projects</Link>
            <Link href="/addProject">➕ Add Project</Link>
            <div className="profile-dropdown">
                <button
                    className="profile-button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                    <Image src={user} alt="Profile" height={24} width={24} />
                    <span className="arrow">▼</span>
                </button>
                {isDropdownOpen && (
                    <div className="dropdown-menu">
                        <Link href="/profile">👤 Profile</Link>
                        <Link href="/settings">⚙️ Settings</Link>
                        <button onClick={handleLogout}>🚪 Logout</button>
                    </div>
                )}
            </div>
        </div>
    )
}