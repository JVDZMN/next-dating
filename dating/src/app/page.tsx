import {Button} from '@heroui/button'; 
import Link from 'next/link';

export default function Home() {
  return (
    <div  >
      <p className=" text-3xl text-red-500">
       Dating

      </p>
      <Button
        as={Link}
        href='/members'
      >Members</Button>

    </div>

  );
}
