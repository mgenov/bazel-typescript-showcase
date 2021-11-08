export const getId = () => 'module-two';

export const MyComponent = ({ name = 'test' }) => (
    <div>Hello {{ name }}</div>
)
