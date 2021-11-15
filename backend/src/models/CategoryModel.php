<?php
include_once 'src/config/DB.php';
class CategoryModel 
{
	private $conn;
	private $table = 'categories';

	public function __construct() {
	  $db = new DB();
	  $this->conn = $db->connect();
	}
	public function getAll() {
	  $sql = "SELECT * FROM categories";
	  $stmt = $this->conn->query($sql);
	  $this->conn = null;
	  return $stmt->fetchAll(PDO::FETCH_ASSOC);
	}
}