import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>Product</th>
            <th>Qtd</th>
            <th>subtotal</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {' '}
              <img
                src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom2.jpg?ts=1586961574&ims=326x"
                alt="tenis"
              />
            </td>
            <td>
              <strong>tenis muito massa</strong>
              <span>R$</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#f14f16" />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#f14f16" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$250,00</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#f14f16" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">finalizar pedido</button>
        <Total>
          <span>Total</span>
          <strong>R$1920,00</strong>
        </Total>
      </footer>
    </Container>
  );
}