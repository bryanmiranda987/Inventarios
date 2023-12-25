import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Carousel from "./Carousel";
function home() {
    return (
        <Container className="mt-4">
            <h1>Bienvenido a la Aplicación de Inventarios</h1>
            <p>Gestionar y realizar seguimiento de inventarios nunca ha sido tan fácil.</p>
            <Carousel/>
            <Row className="mt-4">
                <Col md={6}>
                    <h2>Explorar Inventarios</h2>
                    <p>Consulta la lista de inventarios existentes</p>
                    <Link to="/inventario">
                        <Button variant="primary">Ver Inventarios</Button>
                    </Link>
                </Col>

                <Col md={6}>
                    <h2>Solicitar Inventario</h2>
                    <p>Solicita nuevos productos para tu inventario.</p>
                    <Link to="/solicitudes">
                        <Button variant="success">Solicitar Inventario</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
}


export default home;