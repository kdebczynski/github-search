import React from "React";
import { shallow } from "enzyme";
import Card from "./Card";
import MaterialCard from '@material-ui/core/Card';
import MaterialCardContent from '@material-ui/core/CardContent';

describe("Card component", function () {

    let wrapper;

    const render = ({ children, props } ={ }) => {
        wrapper = shallow(<Card { ...props }>{ children }</Card>);
    };

    test("should render Card from Material UI", function () {
        render();
        expect(wrapper.find(MaterialCard)).toExist();
    });

    test("should render MaterialCardContent from Material UI", function () {
        render();
        expect(wrapper.find(MaterialCardContent)).toExist();
    });
});
