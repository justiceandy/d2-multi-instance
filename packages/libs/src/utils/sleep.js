export default async function(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  