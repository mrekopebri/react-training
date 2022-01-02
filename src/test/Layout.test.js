import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';

describe('Layout component test', () => {
    test('Successfully render Layout', () => {
        render(
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        );

        const LayoutComponent = screen.getByText(/library app/i);
        expect(LayoutComponent).toBeInTheDocument();
    });
});