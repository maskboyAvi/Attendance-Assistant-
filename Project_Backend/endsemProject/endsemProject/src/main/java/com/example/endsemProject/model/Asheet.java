package com.example.endsemProject.model;

import java.time.LocalDate;

import jakarta.persistence.*;

@Entity
public class Asheet {
public Asheet() {
		super();
		// TODO Auto-generated constructor stub
	}
@Id
private LocalDate date;

private int LCS2022001;
private int LCS2022002;
private int LCS2022003;
private int LCS2022004;
private int LCS2022005;
private int LCS2022006;
private int LCS2022007;
private int LCS2022008;
private int LCS2022009;
private int LCS2022010;
public Asheet(LocalDate date, int lCS2022001, int lCS2022002, int lCS2022003, int lCS2022004, int lCS2022005,
		int lCS2022006, int lCS2022007, int lCS2022008, int lCS2022009, int lCS2022010) {
	super();
	this.date = date;
	LCS2022001 = lCS2022001;
	LCS2022002 = lCS2022002;
	LCS2022003 = lCS2022003;
	LCS2022004 = lCS2022004;
	LCS2022005 = lCS2022005;
	LCS2022006 = lCS2022006;
	LCS2022007 = lCS2022007;
	LCS2022008 = lCS2022008;
	LCS2022009 = lCS2022009;
	LCS2022010 = lCS2022010;
}
public LocalDate getDate() {
	return date;
}
public void setDate(LocalDate date) {
	this.date = date;
}
public int getLCS2022001() {
	return LCS2022001;
}
public void setLCS2022001(int lCS2022001) {
	LCS2022001 = lCS2022001;
}
public int getLCS2022002() {
	return LCS2022002;
}
public void setLCS2022002(int lCS2022002) {
	LCS2022002 = lCS2022002;
}
public int getLCS2022003() {
	return LCS2022003;
}
public void setLCS2022003(int lCS2022003) {
	LCS2022003 = lCS2022003;
}
public int getLCS2022004() {
	return LCS2022004;
}
public void setLCS2022004(int lCS2022004) {
	LCS2022004 = lCS2022004;
}
public int getLCS2022005() {
	return LCS2022005;
}
public void setLCS2022005(int lCS2022005) {
	LCS2022005 = lCS2022005;
}
public int getLCS2022006() {
	return LCS2022006;
}
public void setLCS2022006(int lCS2022006) {
	LCS2022006 = lCS2022006;
}
public int getLCS2022007() {
	return LCS2022007;
}
public void setLCS2022007(int lCS2022007) {
	LCS2022007 = lCS2022007;
}
public int getLCS2022008() {
	return LCS2022008;
}
public void setLCS2022008(int lCS2022008) {
	LCS2022008 = lCS2022008;
}
public int getLCS2022009() {
	return LCS2022009;
}
public void setLCS2022009(int lCS2022009) {
	LCS2022009 = lCS2022009;
}
public int getLCS2022010() {
	return LCS2022010;
}
public void setLCS2022010(int lCS2022010) {
	LCS2022010 = lCS2022010;
}

}
