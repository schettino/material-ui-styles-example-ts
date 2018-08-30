import * as React from 'react';
import { withStyles, Theme, createStyles, WithStyles } from '@material-ui/core';
import GridMaterial, {
  GridProps as GridPropsMaterial,
} from '@material-ui/core/Grid';

const styles = (theme: Theme) =>
  createStyles({
    pad: {
      padding: theme.spacing.unit * 4,
      [theme.breakpoints.down('sm')]: {
        padding: 0,
      },
    },
  });

interface IProps {
  pad?: boolean;
}

export type GridProps = GridPropsMaterial & WithStyles<typeof styles> & IProps;

const Grid: React.SFC<GridProps> = ({ pad, classes, ...rest }) => (
  <GridMaterial className={pad ? classes.pad : undefined} {...rest} />
);

export const Foo = withStyles(styles)(Grid);
export const Bar = withStyles(styles)<GridProps>(Grid);

// I'm just drilling the props, but in a real scenario I could make some customizations here
const GridFinal: React.SFC<GridProps> = props => (
  <Foo {...props}>Grid final using foo</Foo>
);

export default () => (
  <>
    {/* No props suggestions/autocomplete, but compiler likes it  */}
    <Foo />

    {/* Ok */}
    <Bar />

    {/* Error: Property 'classes' is missing in type  */}
    <GridFinal />
  </>
);
