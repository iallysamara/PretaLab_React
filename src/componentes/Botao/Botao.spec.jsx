import Botao from '.';
import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, screen} from '@testing-library/react';

describe("Testing the Botao component", () => {

    test('renders Botao component with correct text', () => {
        const buttonText = 'Clique aqui';

        render(<Botao>{buttonText}</Botao>);
        
        const buttonElement = screen.getByText(buttonText);

        // Verifica se o botão foi renderizdo corretamente.
        expect(buttonElement).toBeInTheDocument();

        // Verifica se o botão possui a classe 'botao'.
        expect(buttonElement).toHaveClass('botao');
      });
});
