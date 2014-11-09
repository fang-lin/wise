<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class Api extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
    }

    public function monitorSensorData()
    {
        $this->load->helper('date');

        function getRow()
        {
            return [
                'signalStrength' => rand(0, 100) . '%',
                'datetime' => mdate('%H:%i:%s', time()),
                'subTerminalId' => 0,
                'switchTwo' => rand(0, 1),
                'switchOne' => rand(0, 1),
                'type' => 'asd',
                'temperatureA' => rand(-100, 100),
                'temperatureB' => rand(-100, 100),
                'temperatureC' => rand(-100, 100),
                'temperatureD' => rand(-100, 100),
                'terminalId' => 0,
                'switchAlarm' => 0,
                'voltage' => '5V',
                'electricity' => '80mA',
                'output' => rand(0, 1),
                'output2' => rand(0, 1),
            ];
        }

        $result = [];

        for ($i = 0; $i < rand(3, 10); $i++) {
            $result[$i] = getRow();
        }

        $this
            ->output
            ->set_content_type('application/json')
            ->set_output(json_encode($result));
    }
}

/* End of file Api.php */
/* Location: ./application/controllers/Api.php */