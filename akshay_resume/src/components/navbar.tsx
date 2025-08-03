'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import user from '../../Asstes/images/icons8-test-account-48.png'
import { useRouter } from 'next/navigation';

type Props = {
    name: string;
};

export default function Navbar({ name }: Props) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [loading, setLoading] = useState(false); // Loading state for form submission
    const router = useRouter();
    const handleLogout = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent default form submission
        setLoading(true); // Show loading state

        try {
            sessionStorage.removeItem('authToken');
            router.push('/');
        } catch (error) {
            alert('Logout failed. Please try again.')
        }

    }

    return (
        <div className="navbar">
            <div className="flex items-center space-x-2">
                <img src="/ots-logo.svg" alt="OTS" className="h-6 w-6 sm:h-8 sm:w-8" />
                <span className="text-lg sm:text-xl font-bold text-gray-900">OTS</span>
            </div>
            <div className="hidden sm:flex sm:space-x-4">
                <Link href="/home">🏠 Home</Link>
                <Link href="#footer">📞 Contacts</Link>
                <Link href="#card">💼 Projects</Link>
                <Link href="/addProject">➕ Add Project</Link>
            </div>
            {/* <div className="sm:hidden flex space-x-2">
                <Link href="#">🏠</Link>
                <Link href="#footer">📞</Link>
                <Link href="#card">💼</Link>
                <Link href="/addProject">➕</Link>
            </div> */}
            {/* <div className="profile-dropdown"> */}
            <div className="flex items-center space-x-4">
                <div className="text-sm text-gray-700">{name}</div>
                <div className="h-8 w-8 bg-indigo-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">{name.charAt(0)}</span>
                </div>
                <button
                    className="profile-button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                    {/* <Image src={user} alt="Profile" height={20} width={20} className="sm:h-6 sm:w-6" /> */}
                    <span className="arrow text-xs sm:text-sm">▼</span>
                </button>
                {isDropdownOpen && (
                    <div className="dropdown-menu">
                        <Link href="/profile">👤 Profile</Link>
                        <Link href="/settings">⚙️ Settings</Link>
                        <button onClick={handleLogout}>🚪 Logout</button>
                    </div>
                )}
            </div>
        </div >
    )
}