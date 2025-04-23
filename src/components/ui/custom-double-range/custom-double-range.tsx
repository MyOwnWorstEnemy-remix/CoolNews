import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

const DoubleSlider = styled(Slider)(({ theme }) => ({
    color: '#10264c',
    height: 3,
    padding: '13px 0',
    margin: '0 0 0 13px',
    width: '275px',
    '& .MuiSlider-thumb': {
        height: 27,
        width: 27,
        backgroundColor: '#fff',
        border: '1px solid currentColor',
        '&:hover': {
            boxShadow: '0 0 0 8px rgba(61, 93, 150, 0.3)',
        },
        '& .rating-bar': {
            height: 9,
            width: 1,
            backgroundColor: 'currentColor',
            marginLeft: 1,
            marginRight: 1,
        },
    },
    '& .MuiSlider-valueLabel': {
        lineHeight: 1.2,
        fontSize: 12,
        background: 'unset',
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: '50% 50% 50% 0',
        backgroundColor: '#3d5d96',
        transformOrigin: 'bottom left',
        transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
        '&::before': { display: 'none' },
        '&.MuiSlider-valueLabelOpen': {
        transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
        },
        '& > *': {
        transform: 'rotate(45deg)',
        },
    },
    '& .MuiSlider-track': {
        height: 3,
    },
    '& .MuiSlider-rail': {
        color: '#10264c',
        opacity: 0.7,
        height: 3,
        ...theme.applyStyles('dark', {
            color: '#bfbfbf',
            opacity: undefined,
        }),
    },
}));
  
interface DoubleThumbComponentProps extends React.HTMLAttributes<unknown> {}
  
function DoubleThumbComponent(props: DoubleThumbComponentProps) {
    const { children, ...other } = props;
    return (
      <SliderThumb {...other}>
        {children}
        <span className="rating-bar" />
        <span className="rating-bar" />
        <span className="rating-bar" />
      </SliderThumb>
    );
}

type SetRatingRange = (range: number[]) => void;

function CustomDoubleRange ({ratingRange, setRatingRange, minDistance, minValue, maxValue, step} : {
    ratingRange: number[], 
    setRatingRange: SetRatingRange, 
    minDistance: number,
    minValue: number, 
    maxValue: number,
    step: number}) {

    const handleRatingChange = (event: Event, newValue: number | number[], activeThumb: number) => {
        if (Array.isArray(newValue)) {
            if (activeThumb === 0) {
                setRatingRange([Math.min(newValue[0], ratingRange[1] - minDistance), ratingRange[1]]);
            } else {
                setRatingRange([ratingRange[0], Math.max(newValue[1], ratingRange[0] + minDistance)]);
            }
        }
    };

    return (
        <DoubleSlider
            slots={{ thumb: DoubleThumbComponent }}
            getAriaLabel={(index) => (index === 0 ? 'От' : 'До')}
            value={ratingRange}
            onChange={handleRatingChange}
            valueLabelDisplay="auto"
            defaultValue={[minValue, maxValue]}
            min={minValue}
            max={maxValue}
            marks
            step={step}
        />
    )
}

export default CustomDoubleRange;