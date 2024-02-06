import Menu from '.';
import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, screen} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';


describe("Testing the Menu component", () => {
    test("should render the correctly component", () => {
        render(
            <Router>
                <Menu />
            </Router>
        );
        //screen: maneiras de consumo que pega o getAllByRole: seleciona todos os elementos no DOM
        const links = screen.getAllByRole('link');
        expect(links).toHaveLength(3);
        
        // Declarando uma variável que tenha link com o atributo href
        const linkDestinations = links.map(link => link.getAttribute('href'));

        // Esperando que o mapeamento seja igual aos links que estão lá no Meno.jsx
        expect(linkDestinations).toEqual(['/', '/formulario', '/sobre']);
    });

});