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
            return array(
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
            );
        }

        $result = array();

        for ($i = 0; $i < rand(3, 10); $i++) {
            $result[$i] = getRow();
        }

        $this
            ->output
            ->set_content_type('application/json')
            ->set_output(json_encode($result));
    }

    public function subordinateTree()
    {
        $this->load->helper('date');

        if (isset($_POST['id'])) {
            $parentId = $_POST['id'];
        } else {
            $parentId = 0;
        }

        function getChildren($parentId)
        {
            $result = array();

            $nodes = array(
                array(
                    'id' => 1,
                    'name' => '管理员',
                    'parentId' => 0,
                    'isParent' => true,
                ),
                array(
                    'id' => 2,
                    'parentId' => 1,
                    'name' => '管理员1',
                    'isParent' => true
                ),
                array(
                    'id' => 3,
                    'parentId' => 1,
                    'name' => '管理员2',
                ),
                array(
                    'id' => 4,
                    'parentId' => 2,
                    'name' => '管理员3'
                ),
                array(
                    'id' => 5,
                    'parentId' => 2,
                    'name' => '管理员4'
                )
            );

            foreach ($nodes as $node) {
                if ($node['parentId'] == $parentId) {
                    array_push($result, $node);
                }
            }

            return $result;
        }

        $this
            ->output
            ->set_content_type('application/json')
//            ->set_output(json_encode($result));
            ->set_output(json_encode(getChildren($parentId)));
    }

    public function chartData()
    {
        $this->load->helper('date');

        function getData()
        {
            return array(now(), rand(1, 30));
        }

        $result = array();

        for ($j = 0; $j < 4; $j++) {
            $result[$j] = getData();
        }

        $this
            ->output
            ->set_content_type('application/json')
            ->set_output(json_encode($result));
    }
}

/* End of file Api.php */
/* Location: ./application/controllers/Api.php */