import React from 'react';
import { useRouter } from 'next/router';
import NameThatColor from 'pages/name-that-color';
import validateHex, { returnIfNotColor } from 'helpers/validateHex';

export default function index() {
  const router = useRouter();
  const { hex } = router.query;
  const color = `#${hex}`;

  if (validateHex(color)) {
    return <NameThatColor urlColor={color} />;
  }
  return <h1>Invalid color code</h1>;
}
