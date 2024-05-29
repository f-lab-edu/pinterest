import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

const ExampleComponent = () => <div>테스트 컴포넌트</div>;

test('테스트 컴포넌트 렌더링', () => {
  render(<ExampleComponent />);
  expect(screen.getByText('테스트 컴포넌트')).toBeInTheDocument();
});
