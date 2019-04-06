<?php

namespace NovaFixedBars;

use Laravel\Nova\Nova;
use Laravel\Nova\Events\ServingNova;
use Illuminate\Support\ServiceProvider;

class NovaFixedBarsServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $config = config('nova-fixed-bars', [
          'fixedSidebar' => true,
          'fixedNavbar'  => true,
          'responsive'   => true,
        ]);

        Nova::serving(function (ServingNova $event) use ($config) {
            if ($config['fixedSidebar']) {
                Nova::style('nova-fixedSidebar', __DIR__.'/../resources/css/fixed-sidebar.css');

                if ($config['responsive']) {
                    Nova::style('nova-responsive', __DIR__.'/../resources/css/responsive.css');
                    Nova::script('nova-responsive-js', __DIR__.'/../resources/js/responsive.js');
                }

                Nova::style('nova-perfect-scroll-css', __DIR__.'/../resources/css/perfect-scrollbar.css');
                Nova::script('nova-perfect-scroll-js', __DIR__.'/../resources/js/perfect-scrollbar.min.js');
                Nova::script('nova-perfect-scroll-js-init', __DIR__.'/../resources/js/perfect-scrollbar-init.js');
            }

            if ($config['fixedNavbar']) {
                Nova::style('nova-fixedNavbar', __DIR__.'/../resources/css/fixed-navbar.css');
            }
        });

        $this->publishes([
            __DIR__.'/../config/nova-fixed-bars.php' => config_path('nova-fixed-bars.php'),
        ], 'config');
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
