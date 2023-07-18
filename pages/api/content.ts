import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';

const contentHandler = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const filePath = path.join(process.cwd(), 'json/testimonials.json');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(fileContent);

    res.status(200).json(data);
  } catch (error) {
    console.error('Error reading JSON file:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default contentHandler;