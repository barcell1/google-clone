import type { NextApiRequest, NextApiResponse } from 'next'

export default function getGoogleApi(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.status(500).json({ message: 'Desculpe, apenas GET requests' })
  } else {
    res.json({ message: 'method not allowed', method: req.method })
  }
}

// import axios from "axios";

// export default async (req, res) => {
//   const URL = `https://api.i.require.keys/?&api_key=${process.env.SECRET_KEY}`;
//   const response = await axios.get(URL);
//   res.status(200).json({ data: response.data })
// }
