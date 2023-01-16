<?php

namespace Tests\Feature;

use App\Mail\FormSubmitted;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;

class SubmitFormTest extends TestCase
{
    /** @test */
    public function itRequiresASubject()
    {
        //  Given / When
        $this->post('/submit', [
            'body' => 'This is the body',
        ])->assertSessionHasErrors();
    }

    /** @test */
    public function itRequiresABody()
    {
        //  Given / When
        $this->post('/submit', [
            'subject' => 'This is the subject',
        ])->assertSessionHasErrors();
    }


    /** @test */
    public function itSendsAnEmail()
    {
        // Given
        Mail::fake();

        // When
        $this->post('/submit', [
            'body'=> 'This is the body',
            'subject' => 'This is the subject',
        ])->assertSessionHasNoErrors();

        // Then
        Mail::assertSent(FormSubmitted::class, function ($mail) {
            return $mail->body === 'This is the body' && $mail->subject === 'This is the subject';
        });
    }
}
