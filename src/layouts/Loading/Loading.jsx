import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const Loading = () => {
    return (
        <div className='w-full h-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-x-4'>
            <div className='w-full'>
                <Stack spacing={1}>
                    {/* For variant="text", adjust the height via font-size */}
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    {/* For other variants, adjust the size with `width` and `height` */}
                    <Skeleton variant="rectangular" height={60} />
                    <Skeleton variant="rounded" height={60} />
                </Stack>
            </div>
            <div className='w-full'>
                <Stack spacing={1}>
                    {/* For variant="text", adjust the height via font-size */}
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    {/* For other variants, adjust the size with `width` and `height` */}
                    <Skeleton variant="rectangular" height={60} />
                    <Skeleton variant="rounded" height={60} />
                </Stack>
            </div>
            <div className='w-full hidden md:block'>
                <Stack spacing={1}>
                    {/* For variant="text", adjust the height via font-size */}
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    {/* For other variants, adjust the size with `width` and `height` */}
                    <Skeleton variant="rectangular" height={60} />
                    <Skeleton variant="rounded" height={60} />
                </Stack>
            </div>
            <div className='w-full hidden md:block'>
                <Stack spacing={1}>
                    {/* For variant="text", adjust the height via font-size */}
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    {/* For other variants, adjust the size with `width` and `height` */}
                    <Skeleton variant="rectangular" height={60} />
                    <Skeleton variant="rounded" height={60} />
                </Stack>
            </div>
            <div className='w-full hidden lg:block'>
                <Stack spacing={1}>
                    {/* For variant="text", adjust the height via font-size */}
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    {/* For other variants, adjust the size with `width` and `height` */}
                    <Skeleton variant="rectangular" height={60} />
                    <Skeleton variant="rounded" height={60} />
                </Stack>
            </div>
            <div className='w-full hidden lg:block'>
                <Stack spacing={1}>
                    {/* For variant="text", adjust the height via font-size */}
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    {/* For other variants, adjust the size with `width` and `height` */}
                    <Skeleton variant="rectangular" height={60} />
                    <Skeleton variant="rounded" height={60} />
                </Stack>
            </div>
            <div className='w-full hidden lg:block'>
                <Stack spacing={1}>
                    {/* For variant="text", adjust the height via font-size */}
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    {/* For other variants, adjust the size with `width` and `height` */}
                    <Skeleton variant="rectangular" height={60} />
                    <Skeleton variant="rounded" height={60} />
                </Stack>
            </div>

        </div>
    );
};

export default Loading;
