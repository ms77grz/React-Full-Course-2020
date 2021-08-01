import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

export default function UseEffectFetchData() {
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return <h2>multiple returns</h2>;
}
