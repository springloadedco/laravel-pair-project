<?php

namespace App\Http\Controllers;

use App\Http\Requests\SubmitFormRequest;
use App\Mail\FormSubmitted;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class SubmitFormController extends Controller
{
    public function __invoke(SubmitFormRequest $request)
    {
        Mail::to('test@example.com')->send(new FormSubmitted(
            body: $request->input('body'),
            subject: $request->input('subject'),
        ));

        return redirect()->back()->with('success', 'Form submitted successfully.');
    }
}
