import celloImg from 'assets/music/media/cello.jpeg';
import bassImg from 'assets/music/media/doublebass.png';
import orchestraImg from 'assets/music/media/orchestra.jpg';
import pianoImg from 'assets/music/media/piano.jpg';
import violaImg from 'assets/music/media/viola.jpg';
import violin1Img from 'assets/music/media/violin1.jpg';
import violin2Img from 'assets/music/media/violin2.png';
import { Instrument } from 'types/music';

const InstrumentUrls: Record<Instrument, string> = {
    [Instrument.VIOLIN1]: violin1Img,
    [Instrument.VIOLIN2]: violin2Img,
    [Instrument.VIOLA]: violaImg,
    [Instrument.CELLO]: celloImg,
    [Instrument.BASS]: bassImg,
    [Instrument.ORCHESTRA]: orchestraImg,
    [Instrument.PIANO]: pianoImg,
};

export default InstrumentUrls;
