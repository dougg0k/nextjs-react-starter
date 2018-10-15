import "raf/polyfill";
import { configure, shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const globalAny: any = global;
globalAny.shallow = shallow;
globalAny.render = render;
globalAny.mount = mount;
