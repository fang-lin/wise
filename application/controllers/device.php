<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class Device extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->helper('url');
        $this->data['__class__'] = strtolower(__CLASS__);
    }

    public function index()
    {
        $this->data['__function__'] = strtolower(__FUNCTION__);
        $this->load->view('master.php', $this->data);
    }

    public function edit()
    {
        $this->data['__function__'] = strtolower(__FUNCTION__);
        $this->load->view('master.php', $this->data);
    }

    public function detail()
    {
        $this->data['__function__'] = strtolower(__FUNCTION__);
        $this->load->view('master.php', $this->data);
    }

    public function add()
    {
        $this->data['__function__'] = strtolower(__FUNCTION__);
        $this->load->view('master.php', $this->data);
    }
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */