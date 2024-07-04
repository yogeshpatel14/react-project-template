const utilPromiseCallback = (httpCall: Promise<any>) => {
  return new Promise((resolve, reject) => {
    httpCall
      .then((_res: any) => {
        resolve(_res);
      })
      .catch((_err: any) => {
        reject(_err);
      });
  });
};

const isProduction = process.env.NODE_ENV === "production";

export { utilPromiseCallback, isProduction };
