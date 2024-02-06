import CampoCep from '.';
import React from 'react';
import { describe, test, expect } from 'vitest';
import { render} from '@testing-library/react';

describe("Testing the CampoCep component", () => {
    test("renders CampoCep component", () => {
        const { getByLabelText } = render(
            <CampoCep
            label = 'CEP'
            labelEndereco = 'Endereco'
            labelBairro = 'Bairro'
            aoPreencherEndereco={() => {}}
            />
        );
       
        const cepLabel = getByLabelText(/CEP/i);
        const enderecoLabel = getByLabelText(/Endereco/i);
        const bairroLabel = getByLabelText(/Bairro/i);

        expect(cepLabel).toBeInTheDocument();
        expect(enderecoLabel).toBeInTheDocument();
        expect(bairroLabel).toBeInTheDocument();
    });

});