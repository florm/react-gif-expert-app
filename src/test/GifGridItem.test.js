import {shallow} from 'enzyme'
import { GifGridItem } from '../components/GifGridItem'

describe('test para GifGridItem', () => {
    
    let wrapper
    
    test('se debe mostrar correctamente el GifGridItem', () => {
        wrapper = shallow( <GifGridItem/>)
        expect(wrapper).toMatchSnapshot()
    })
    
})
