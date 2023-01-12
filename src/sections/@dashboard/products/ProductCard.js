import PropTypes from 'prop-types';
// @mui
import {  Card, Link, Typography, Stack } from '@mui/material';

// ----------------------------------------------------------------------


// ----------------------------------------------------------------------

ShopProductCard.propTypes = {
  product: PropTypes.object,
};

export default function ShopProductCard({ product }) {
  const { name,  price} = product;

  return (
    <Card>
      

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link color="inherit" underline="hover">
          <Typography variant="body1" noWrap>
            {name}
          </Typography>
        </Link>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="subtitle1">
            <Typography
              component="span"
              variant="subtitle2"
            >
              {price}
            </Typography>
            
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
