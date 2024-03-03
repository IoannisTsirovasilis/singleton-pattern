'use client';

import { Cashier } from '@/utils/Cashier';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [cashier, setCashier] = useState<Cashier>(Cashier.getInstance());
  const [walking, setWalking] = useState<boolean>(false);

  function switchCounter() {
    setWalking(true);
    setTimeout(() => {
      setCashier(Cashier.getInstance());
      setWalking(false);
    }, 3000);
  }

  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-center pt-12 bg-gray-200 text-black">
      <h1 className="text-xl font-bold">Singleton Pattern</h1>
      <div className="flex flex-col items-center border-2 border-black p-4 m-4 rounded-xl w-1/3">
        <label>{walking ? '...' : cashier.getName()}</label>
        <Image
          src={walking ? '/empty-counter.png' : '/cashier.png'}
          alt="Singleton Cashier"
          width={128}
          height={128}
        />
        <span
          dangerouslySetInnerHTML={{
            __html: walking
              ? 'Walking to another counter...'
              : cashier.greetCustomer(),
          }}
        ></span>
        <button
          className="p-2 mt-2 bg-gray-500 text-white rounded-md"
          onClick={switchCounter}
        >
          Go to another counter
        </button>
      </div>

      <div className="mt-32">
        Icon by{' '}
        <Link
          href="https://freeicons.io/profile/433683"
          className="text-blue-500 hover:text-blue-700 hover:underline"
        >
          Pexelpy
        </Link>{' '}
        on{' '}
        <Link
          className="text-blue-500 hover:text-blue-700 hover:underline"
          href="https://freeicons.io"
        >
          freeicons.io
        </Link>
      </div>
    </main>
  );
}
