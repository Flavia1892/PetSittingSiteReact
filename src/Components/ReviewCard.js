import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

function ReviewCard(review) {
  const navigate = useNavigate();

  return (
    <div>
      <div class="zoom">
        <Card style={{ width: "21rem" }}>
          <Card.Body>
            <Card.Title>
              <p class="font-serif text-3xl">{review.tite}</p>
            </Card.Title>
            <Card.Title>
              <p class="font-serif text-3xl">{review.name}</p>
            </Card.Title>
            <Card.Text>
              <p class="font-bold text-2xl underline mb-3">
                {review.stars} stars
              </p>
            </Card.Text>
            <Card.Text>
              <p>
                <b>Phone: </b>
                {review.phone}
              </p>
              <p class="mb-3">
                <b>Email:</b>

                <span>{review.email}</span>
              </p>
            </Card.Text>

            <Card.Text><b>Sitter name:</b>{review.sitter}</Card.Text>
            <Card.Text>
              <p class="font-bold underline mt-3">Message:</p>

              {review.message}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default ReviewCard;
