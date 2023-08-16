<?php

namespace App\Api;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use App\Libs\JsonResp;

class ResponseController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    
    /** @var JsonResponse */
    protected $resp;

    function __construct()
    {
        $this->resp = new JsonResp();
    }
}
