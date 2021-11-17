import React from 'react';
import HeaderAdmin from './HeaderAdmin';
import Authorization from './Authorization';

export default function AdminSection() {
  return (
    <React.Fragment>
      <HeaderAdmin />
      <Authorization />
    </React.Fragment>
  );
}
