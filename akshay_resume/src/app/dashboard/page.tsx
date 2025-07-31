'use client'

import Contacts from '@/components/footer'
import Profile from '../../components/profile'
import Navbar from '@/components/navbar'
import ItemList from '@/components/item-list'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function App() {
  const router = useRouter();
  useEffect(() => {
    const token = sessionStorage.getItem('authToken');
    if (!token) {
      router.push('/login');
    }
  });

  return (
    <section>
      <Navbar />
      <Profile />
      <Contacts />
    </section>


  )
}





