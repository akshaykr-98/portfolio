'use client'

import Contacts from '@/components/footer'
import Profile from '../../components/profile'
import Navbar from '@/components/navbar'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function App() {
  const router = useRouter();
  useEffect(() => {
    const token = sessionStorage.getItem('authToken');
    if (!token) {
      router.push('/');
    }
  });

  return (
    <section>
      <Navbar name="Akshay" />
      <Profile />
      <Contacts />
    </section>


  )
}





