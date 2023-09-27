import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const Loading = () => {
    return (
        <div className='w-full h-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-x-4'>
            <div className='w-full'>
                <Stack>
                    <Skeleton variant="rectangular" height={60} />
                    <Skeleton variant="rectangular" height={60} />
                </Stack>
            </div>
            <div className='w-full'>
                <Stack>
                    <Skeleton variant="rectangular" height={60} />
                    <Skeleton variant="rectangular" height={60} />
                </Stack>
            </div>
            <div className='w-full hidden md:block'>
                <Stack>
                    <Skeleton variant="rectangular" height={60} />
                    <Skeleton variant="rectangular" height={60} />
                </Stack>
            </div>
            <div className='w-full hidden md:block'>
                <Stack>
                    <Skeleton variant="rectangular" height={60} />
                    <Skeleton variant="rectangular" height={60} />
                </Stack>
            </div>
            <div className='w-full hidden lg:block'>
                <Stack>
                    <Skeleton variant="rectangular" height={60} />
                    <Skeleton variant="rectangular" height={60} />
                </Stack>
            </div>
            <div className='w-full hidden lg:block'>
                <Stack>
                    <Skeleton variant="rectangular" height={60} />
                    <Skeleton variant="rectangular" height={60} />
                </Stack>
            </div>
            <div className='w-full hidden lg:block'>
                <Stack>
                    <Skeleton variant="rectangular" height={60} />
                    <Skeleton variant="rectangular" height={60} />
                </Stack>
            </div>

        </div>
    );
};

export default Loading;
