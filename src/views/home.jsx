
import { FirstFooter } from '../cmps/first-footer';
import { MainFooter } from '../cmps/main-footer';
import { Mask1 } from '../cmps/mask-1';
import { Mask2 } from '../cmps/mask-2';
import { Mask3 } from '../cmps/mask-3';




export const Home = () => {

    return (
        <main>
            <Mask1 />
            <Mask2 />
            <Mask3 />
            <FirstFooter />
            <MainFooter />
        </main>
    )
}