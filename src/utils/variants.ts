export const fadeIn = (direction: string, duration: number) => {
  switch (direction) {
    case "up":
      return {
        initial: { y: 500, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: 500, opacity: 0 },
        transition: { duration: duration },
      };
    default:
      return null;
  }
};
