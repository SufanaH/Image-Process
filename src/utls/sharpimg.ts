import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const imgProcess = async (
  imgName: string,
  w: string,
  h: string
): Promise<{ sharped: boolean; file: string; err: string }> => {
  try {
    const imgOrginal = path.join(
      process.cwd(),
      `/public/images/${imgName}.jpg`
    );
    const imgSharped = path.join(process.cwd(), '/public/thumbnails');

    if (fs.existsSync(`${imgSharped}/${imgName}_${w}_${h}.jpg`))
      return {
        sharped: true as boolean,
        file: (imgSharped + `/${imgName}_${w}_${h}.jpg`) as string,
        err: '' as string,
      };

    if (!fs.existsSync(imgSharped)) fs.mkdirSync(imgSharped);

    await sharp(imgOrginal)
      .resize(+w, +h)
      .toFile(imgSharped + `/${imgName}_${w}_${h}.jpg`);

    return {
      sharped: true as boolean,
      file: (imgSharped + `/${imgName}_${w}_${h}.jpg`) as string,
      err: '' as string,
    };
  } catch (err) {
    return {
      sharped: false as boolean,
      file: '' as string,
      err: err as string,
    };
  }
};

export default imgProcess;
