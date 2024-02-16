import { chakra, ImageProps, forwardRef } from "@chakra-ui/react";

export const Logo = forwardRef<ImageProps, "img">((props, ref) => {
  return (
    <chakra.img
      src="https://cdn.evalart.com/wp-content/uploads/2016/11/logo.png"
      ref={ref}
      {...props}
    />
  );
});
