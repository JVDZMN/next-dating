import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from '@heroui/react';
import { Session } from 'next-auth'
import Link from 'next/link';
import React from 'react'
import SignOutButton from '../SignOutButton';
type Props = {
    user: Session['user'];
}
export default function UserMenu({user}:Props) {
  return (
    <Dropdown placement='bottom-end'>
          <DropdownTrigger>
              <Avatar
                  isBordered
                  as='button'
                  className='transittion-transform'
                  color='secondary'
                  name={user?.name || 'user'}
                  size='sm'
                  src={user?.image || '/public/images/user.png'}

              />
          </DropdownTrigger>
          <DropdownMenu variant='flat' aria-label='User action menu'>
              <DropdownSection showDivider>
                  <DropdownItem isReadOnly as='span'
            className=' h-14 flex flex-row ' aria-label='username' key={'signedinas'} >
            Signed in as {user?.name}
                  </DropdownItem>
        </DropdownSection>
        <DropdownItem as={Link} key={'profile'} href='members/edit'>
          Edit Profile
        </DropdownItem>
        <DropdownItem  key={'Log out'} >
          <SignOutButton/>
        </DropdownItem>
          </DropdownMenu>

    </Dropdown>
  )
}
