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

type Styles = typeof styles;

interface IProps {
  pad?: boolean;
  classes?: Styles;
}

export type GridProps = IProps & GridPropsMaterial;

const Grid: React.SFC<GridProps & WithStyles<Styles>> = ({
  pad,
  classes,
  ...rest
}) => <GridMaterial className={pad ? classes.pad : undefined} {...rest} />;

const Foo = withStyles(styles)<GridProps>(Grid);

const Section: React.SFC<GridProps & { description: string }> = ({
  description,
  ...props
}) => (
  <Foo md={6} {...props}>
    {description}
    Grid final using foo
  </Foo>
);

export default () => (
  <>
    {/* Ok */}
    <Section description="" />
  </>
);
