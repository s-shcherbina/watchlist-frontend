import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { getFavoriteAssets } from '../../store/thunks/assets-thunks';
import { Box, Grid, Stack, Typography, useTheme } from '@mui/material';

const Home: React.FC = (): JSX.Element => {
  const theme = useTheme();
  const favoriteAssets: any[] = useAppSelector(
    (state) => state.assets.favoriteAssets
  );
  const fetchDataRef = useRef(false);
  const dispatch = useAppDispatch();

  const favoriteAssetName = useMemo(() => ['bitcoin', 'ethereum'], []);

  const filteredArray = useMemo(
    () =>
      favoriteAssets.filter(
        (value, index, array) =>
          index === array.findIndex((t) => t.name === value.name)
      ),
    [favoriteAssets]
  );

  const fetchData = useCallback(
    (data: string[]) => {
      data.forEach((item) => dispatch(getFavoriteAssets(item)));
    },
    [dispatch]
  );

  console.log(favoriteAssets);
  console.log(fetchDataRef.current);
  console.log(filteredArray);

  useEffect(() => {
    if (fetchDataRef.current) return;
    fetchDataRef.current = true;
    fetchData(favoriteAssetName);
  }, [favoriteAssetName, fetchData]);

  const renderFavoriteBlock = filteredArray.map((item: any) => (
    <Grid item key={item.name} xs={12} sm={6}>
      <Grid
        container
        sx={{
          minHeight: 185,
          borderRadius: 1.5,
          p: 2,
          border: `1px solid ${theme.palette.divider}`,
          bgcolor:
            theme.palette.mode === 'light'
              ? theme.palette.background.default
              : theme.palette.action.selected,
        }}
      >
        <Grid item xs={12} sm={6}>
          <Typography variant='h5' sx={{ textTransform: 'capitalize' }}>
            {item.name}
          </Typography>
          <Stack
            sx={{
              height: '100%',
              justifyContent: 'flex-end',
            }}
          >
            <Typography variant='h4'>
              {`$${item.data.prices[0][1].toFixed(4)}`}
            </Typography>
            <Typography
              variant='body1'
              sx={{ pb: 4, color: theme.palette.text.secondary }}
            >
              {`$${item.data.market_caps[0][1].toFixed()}`}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}>
          Chart
        </Grid>
      </Grid>
    </Grid>
  ));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{ p: 2 }}>
        {renderFavoriteBlock}
      </Grid>
    </Box>
  );
};

export default Home;
