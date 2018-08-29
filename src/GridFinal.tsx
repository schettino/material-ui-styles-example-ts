import * as React from 'react';
import { withStyles, Theme, createStyles } from '@material-ui/core';
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

  classes?: {
    pad: string;
  };
}

export type GridProps = GridPropsMaterial & IProps;

const Grid: React.SFC<GridProps> = ({ pad, classes, ...rest }) => (
  <GridMaterial className={pad ? classes!.pad : undefined} {...rest} />
);

export const Foo = withStyles(styles)(Grid);
export const Bar = withStyles(styles)<GridProps>(Grid);

const GridFinal: React.SFC<GridProps> = props => (
  <Foo>Grid final using foo</Foo>
);

export default () => (
  <>
    {/* Ok  */}
    <Foo />

    {/* Ok */}
    <Bar />

    {/* Ok  */}
    <GridFinal />
  </>
);
