import React from 'react';
import { render } from '@testing-library/react';
import Profile from './Profile';

describe('<Profile />', () => {
  it('matches snapshot', () => {
    const utils = render(<Profile username="곰팅" userimg="인영" />);
    expect(utils.container).toMatchSnapshot();
  });
  it('shows the props correctly', () => {
    const utils = render(<Profile username="곰팅" userimg="인영" />);
    utils.getByText('곰팅'); // 곰팅 라는 텍스트를 가진 엘리먼트가 있는지 확인
    utils.getByText('(인영)'); // (인영) 이라는 텍스트를 가진 엘리먼트가 있는지 확인
    utils.getByText(/인/); // 정규식 /인/ 을 통과하는 엘리먼트가 있는지 확인
  });
});
