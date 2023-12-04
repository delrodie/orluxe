<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Attribute\Cache;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/')]
//    #[Cache(maxage: 3600, public: true, mustRevalidate: true)]
    public function home(): Response
    {
        return $this->render('frontend/home.html.twig');
    }

    #[Route(
        '/{reactRouting}',
        name: 'app_frontend_react',
        requirements: ["reactRouting" => "^(?!api|_profiler|_wdt).+"]
    )]
    public function react(): Response
    {
        return $this->render('frontend/home.html.twig');
    }
}