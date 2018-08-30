Files to check <br />
[GridExtend.tsx](src/GridExtend.tsx) (current solution) <br />
[GridFinal.tsx](src/GridFinal.tsx) (better solution?) <br />
[GridFinal2.tsx](src/GridFinal2.tsx) (improved) <br />

At first, when using the `WithStyles`, it seems to be ok. But, as soon as we leverage reusability, the compiler complains about a missing `classes` prop. This occurs 'cause `WithStyles` implies that this props is required. So, the trick part is manage the current component to allow the the received `classes` prop, while not turning it as a required one for the next components.

This is important because sometimes we need to modify a general purpose component comming from a 3party lib, and use this new one as a base to another general purpose components. In this example, we use a `Grid` from material-ui (v3), where we want to set a switch prop to apply or not some gutters. Then, we use it to make a Section component.

More info: <br />
[https://github.com/mui-org/material-ui/issues/8447](https://github.com/mui-org/material-ui/issues/8447)
